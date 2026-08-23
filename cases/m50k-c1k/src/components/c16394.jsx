import React from 'react';
const LABEL_16394 = 'component_16394';
export function Component16394({ value = 16394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16394, 'data-value': derived.doubled }, children);
}
export default Component16394;
