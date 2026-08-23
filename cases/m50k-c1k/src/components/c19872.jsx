import React from 'react';
const LABEL_19872 = 'component_19872';
export function Component19872({ value = 19872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19872, 'data-value': derived.doubled }, children);
}
export default Component19872;
