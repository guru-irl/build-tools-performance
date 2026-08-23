import React from 'react';
const LABEL_19447 = 'component_19447';
export function Component19447({ value = 19447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19447, 'data-value': derived.doubled }, children);
}
export default Component19447;
