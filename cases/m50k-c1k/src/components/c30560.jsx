import React from 'react';
const LABEL_30560 = 'component_30560';
export function Component30560({ value = 30560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30560, 'data-value': derived.doubled }, children);
}
export default Component30560;
