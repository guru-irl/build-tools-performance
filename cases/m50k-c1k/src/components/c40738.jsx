import React from 'react';
const LABEL_40738 = 'component_40738';
export function Component40738({ value = 40738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40738, 'data-value': derived.doubled }, children);
}
export default Component40738;
