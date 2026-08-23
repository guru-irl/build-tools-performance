import React from 'react';
const LABEL_14066 = 'component_14066';
export function Component14066({ value = 14066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14066, 'data-value': derived.doubled }, children);
}
export default Component14066;
