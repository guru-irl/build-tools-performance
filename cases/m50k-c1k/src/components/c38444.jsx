import React from 'react';
const LABEL_38444 = 'component_38444';
export function Component38444({ value = 38444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38444, 'data-value': derived.doubled }, children);
}
export default Component38444;
