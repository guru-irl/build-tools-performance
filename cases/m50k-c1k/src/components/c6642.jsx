import React from 'react';
const LABEL_6642 = 'component_6642';
export function Component6642({ value = 6642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6642, 'data-value': derived.doubled }, children);
}
export default Component6642;
