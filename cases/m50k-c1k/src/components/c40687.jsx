import React from 'react';
const LABEL_40687 = 'component_40687';
export function Component40687({ value = 40687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40687, 'data-value': derived.doubled }, children);
}
export default Component40687;
