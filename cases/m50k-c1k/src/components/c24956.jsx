import React from 'react';
const LABEL_24956 = 'component_24956';
export function Component24956({ value = 24956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24956, 'data-value': derived.doubled }, children);
}
export default Component24956;
