import React from 'react';
const LABEL_15580 = 'component_15580';
export function Component15580({ value = 15580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15580, 'data-value': derived.doubled }, children);
}
export default Component15580;
