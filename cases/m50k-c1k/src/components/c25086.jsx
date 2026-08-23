import React from 'react';
const LABEL_25086 = 'component_25086';
export function Component25086({ value = 25086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25086, 'data-value': derived.doubled }, children);
}
export default Component25086;
