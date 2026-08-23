import React from 'react';
const LABEL_29062 = 'component_29062';
export function Component29062({ value = 29062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29062, 'data-value': derived.doubled }, children);
}
export default Component29062;
