import React from 'react';
const LABEL_18017 = 'component_18017';
export function Component18017({ value = 18017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18017, 'data-value': derived.doubled }, children);
}
export default Component18017;
