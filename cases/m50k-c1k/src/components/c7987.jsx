import React from 'react';
const LABEL_7987 = 'component_7987';
export function Component7987({ value = 7987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7987, 'data-value': derived.doubled }, children);
}
export default Component7987;
