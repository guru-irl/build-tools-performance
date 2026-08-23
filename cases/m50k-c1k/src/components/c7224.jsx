import React from 'react';
const LABEL_7224 = 'component_7224';
export function Component7224({ value = 7224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7224, 'data-value': derived.doubled }, children);
}
export default Component7224;
