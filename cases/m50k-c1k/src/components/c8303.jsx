import React from 'react';
const LABEL_8303 = 'component_8303';
export function Component8303({ value = 8303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8303, 'data-value': derived.doubled }, children);
}
export default Component8303;
