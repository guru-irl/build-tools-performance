import React from 'react';
const LABEL_44470 = 'component_44470';
export function Component44470({ value = 44470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44470, 'data-value': derived.doubled }, children);
}
export default Component44470;
