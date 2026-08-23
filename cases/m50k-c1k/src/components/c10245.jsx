import React from 'react';
const LABEL_10245 = 'component_10245';
export function Component10245({ value = 10245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10245, 'data-value': derived.doubled }, children);
}
export default Component10245;
