import React from 'react';
const LABEL_19308 = 'component_19308';
export function Component19308({ value = 19308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19308, 'data-value': derived.doubled }, children);
}
export default Component19308;
