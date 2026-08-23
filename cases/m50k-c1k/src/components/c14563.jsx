import React from 'react';
const LABEL_14563 = 'component_14563';
export function Component14563({ value = 14563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14563, 'data-value': derived.doubled }, children);
}
export default Component14563;
