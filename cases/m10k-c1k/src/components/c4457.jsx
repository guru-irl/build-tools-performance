import React from 'react';
const LABEL_4457 = 'component_4457';
export function Component4457({ value = 4457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4457, 'data-value': derived.doubled }, children);
}
export default Component4457;
