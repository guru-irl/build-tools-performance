import React from 'react';
const LABEL_38137 = 'component_38137';
export function Component38137({ value = 38137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38137, 'data-value': derived.doubled }, children);
}
export default Component38137;
