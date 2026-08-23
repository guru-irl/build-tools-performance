import React from 'react';
const LABEL_45447 = 'component_45447';
export function Component45447({ value = 45447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45447, 'data-value': derived.doubled }, children);
}
export default Component45447;
