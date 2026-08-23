import React from 'react';
const LABEL_6414 = 'component_6414';
export function Component6414({ value = 6414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6414, 'data-value': derived.doubled }, children);
}
export default Component6414;
