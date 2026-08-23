import React from 'react';
const LABEL_40671 = 'component_40671';
export function Component40671({ value = 40671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40671, 'data-value': derived.doubled }, children);
}
export default Component40671;
