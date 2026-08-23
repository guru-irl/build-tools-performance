import React from 'react';
const LABEL_14866 = 'component_14866';
export function Component14866({ value = 14866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14866, 'data-value': derived.doubled }, children);
}
export default Component14866;
