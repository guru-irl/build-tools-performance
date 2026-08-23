import React from 'react';
const LABEL_26770 = 'component_26770';
export function Component26770({ value = 26770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26770, 'data-value': derived.doubled }, children);
}
export default Component26770;
