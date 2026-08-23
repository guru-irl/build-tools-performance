import React from 'react';
const LABEL_25180 = 'component_25180';
export function Component25180({ value = 25180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25180, 'data-value': derived.doubled }, children);
}
export default Component25180;
