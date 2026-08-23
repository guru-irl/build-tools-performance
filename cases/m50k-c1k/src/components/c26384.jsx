import React from 'react';
const LABEL_26384 = 'component_26384';
export function Component26384({ value = 26384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26384, 'data-value': derived.doubled }, children);
}
export default Component26384;
