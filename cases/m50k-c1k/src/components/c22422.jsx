import React from 'react';
const LABEL_22422 = 'component_22422';
export function Component22422({ value = 22422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22422, 'data-value': derived.doubled }, children);
}
export default Component22422;
