import React from 'react';
const LABEL_14230 = 'component_14230';
export function Component14230({ value = 14230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14230, 'data-value': derived.doubled }, children);
}
export default Component14230;
