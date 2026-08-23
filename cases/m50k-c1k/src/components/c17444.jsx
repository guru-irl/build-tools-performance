import React from 'react';
const LABEL_17444 = 'component_17444';
export function Component17444({ value = 17444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17444, 'data-value': derived.doubled }, children);
}
export default Component17444;
