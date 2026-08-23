import React from 'react';
const LABEL_4566 = 'component_4566';
export function Component4566({ value = 4566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4566, 'data-value': derived.doubled }, children);
}
export default Component4566;
