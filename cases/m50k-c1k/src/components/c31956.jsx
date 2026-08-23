import React from 'react';
const LABEL_31956 = 'component_31956';
export function Component31956({ value = 31956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31956, 'data-value': derived.doubled }, children);
}
export default Component31956;
