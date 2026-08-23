import React from 'react';
const LABEL_26447 = 'component_26447';
export function Component26447({ value = 26447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26447, 'data-value': derived.doubled }, children);
}
export default Component26447;
