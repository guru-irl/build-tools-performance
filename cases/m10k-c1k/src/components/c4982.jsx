import React from 'react';
const LABEL_4982 = 'component_4982';
export function Component4982({ value = 4982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4982, 'data-value': derived.doubled }, children);
}
export default Component4982;
