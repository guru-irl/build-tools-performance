import React from 'react';
const LABEL_44447 = 'component_44447';
export function Component44447({ value = 44447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44447, 'data-value': derived.doubled }, children);
}
export default Component44447;
