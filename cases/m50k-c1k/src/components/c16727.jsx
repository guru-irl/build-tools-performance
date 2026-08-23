import React from 'react';
const LABEL_16727 = 'component_16727';
export function Component16727({ value = 16727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16727, 'data-value': derived.doubled }, children);
}
export default Component16727;
