import React from 'react';
const LABEL_19983 = 'component_19983';
export function Component19983({ value = 19983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19983, 'data-value': derived.doubled }, children);
}
export default Component19983;
