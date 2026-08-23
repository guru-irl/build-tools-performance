import React from 'react';
const LABEL_19845 = 'component_19845';
export function Component19845({ value = 19845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19845, 'data-value': derived.doubled }, children);
}
export default Component19845;
