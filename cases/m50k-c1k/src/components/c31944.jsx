import React from 'react';
const LABEL_31944 = 'component_31944';
export function Component31944({ value = 31944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31944, 'data-value': derived.doubled }, children);
}
export default Component31944;
