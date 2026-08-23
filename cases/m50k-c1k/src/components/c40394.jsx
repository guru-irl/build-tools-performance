import React from 'react';
const LABEL_40394 = 'component_40394';
export function Component40394({ value = 40394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40394, 'data-value': derived.doubled }, children);
}
export default Component40394;
