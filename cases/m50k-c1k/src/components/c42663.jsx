import React from 'react';
const LABEL_42663 = 'component_42663';
export function Component42663({ value = 42663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42663, 'data-value': derived.doubled }, children);
}
export default Component42663;
