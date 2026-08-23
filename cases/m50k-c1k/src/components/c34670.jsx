import React from 'react';
const LABEL_34670 = 'component_34670';
export function Component34670({ value = 34670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34670, 'data-value': derived.doubled }, children);
}
export default Component34670;
