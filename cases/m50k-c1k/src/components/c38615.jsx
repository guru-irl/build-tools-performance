import React from 'react';
const LABEL_38615 = 'component_38615';
export function Component38615({ value = 38615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38615, 'data-value': derived.doubled }, children);
}
export default Component38615;
