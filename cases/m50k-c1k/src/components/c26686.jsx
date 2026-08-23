import React from 'react';
const LABEL_26686 = 'component_26686';
export function Component26686({ value = 26686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26686, 'data-value': derived.doubled }, children);
}
export default Component26686;
