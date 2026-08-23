import React from 'react';
const LABEL_25872 = 'component_25872';
export function Component25872({ value = 25872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25872, 'data-value': derived.doubled }, children);
}
export default Component25872;
