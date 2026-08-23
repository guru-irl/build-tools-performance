import React from 'react';
const LABEL_16614 = 'component_16614';
export function Component16614({ value = 16614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16614, 'data-value': derived.doubled }, children);
}
export default Component16614;
