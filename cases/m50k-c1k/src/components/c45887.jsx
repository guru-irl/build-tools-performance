import React from 'react';
const LABEL_45887 = 'component_45887';
export function Component45887({ value = 45887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45887, 'data-value': derived.doubled }, children);
}
export default Component45887;
