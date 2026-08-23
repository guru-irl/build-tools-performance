import React from 'react';
const LABEL_40347 = 'component_40347';
export function Component40347({ value = 40347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40347, 'data-value': derived.doubled }, children);
}
export default Component40347;
