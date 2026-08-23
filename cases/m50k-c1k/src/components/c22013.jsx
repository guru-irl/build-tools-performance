import React from 'react';
const LABEL_22013 = 'component_22013';
export function Component22013({ value = 22013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22013, 'data-value': derived.doubled }, children);
}
export default Component22013;
