import React from 'react';
const LABEL_30727 = 'component_30727';
export function Component30727({ value = 30727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30727, 'data-value': derived.doubled }, children);
}
export default Component30727;
