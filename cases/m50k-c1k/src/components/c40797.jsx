import React from 'react';
const LABEL_40797 = 'component_40797';
export function Component40797({ value = 40797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40797, 'data-value': derived.doubled }, children);
}
export default Component40797;
