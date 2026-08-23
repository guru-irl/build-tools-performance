import React from 'react';
const LABEL_19716 = 'component_19716';
export function Component19716({ value = 19716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19716, 'data-value': derived.doubled }, children);
}
export default Component19716;
