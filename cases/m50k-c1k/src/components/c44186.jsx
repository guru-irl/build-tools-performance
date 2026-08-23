import React from 'react';
const LABEL_44186 = 'component_44186';
export function Component44186({ value = 44186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44186, 'data-value': derived.doubled }, children);
}
export default Component44186;
