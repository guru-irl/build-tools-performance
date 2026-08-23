import React from 'react';
const LABEL_303 = 'component_303';
export function Component303({ value = 303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_303, 'data-value': derived.doubled }, children);
}
export default Component303;
